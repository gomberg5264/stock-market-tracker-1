import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chip from "@material-ui/core/Chip";
import CloseIcon from "@material-ui/icons/Close";
import { getQuote } from "../redux/actions/quote";
import { getIntradayPrices } from "../redux/actions/intradayPrices";
import { createWatchlist } from "../redux/actions/watchlist";
import Menu from "./Menu";
import PageWrapper from "./PageWrapper";
import styled from "styled-components/macro";
import AddIcon from "@material-ui/icons/Add";
import WatchListTable from "./WatchListTable";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import DialogContentText from "@material-ui/core/DialogContentText";
import AddButton from "./AddButton";
import { loadUser } from "../redux/actions/auth";
import { addSymbol } from "../redux/actions/symbol";
type ChipProps = {
  active?: boolean;
};
const options = ["msft", "ibm", "hpq", "googl", "coke", "fb", "xlk"];
const StyledChip = styled(Chip)<ChipProps>`
  && {
    font-family: "Bebas Neue", cursive;
    background-color: ${({ active }) => (active ? "white" : "transparent")};
    color: ${({ active, theme }) => (active ? theme.pink : "white")};
    font-size: 18px;
    border: 1px solid #ffffff;
    padding: 12px;
    margin: 10px;
    height: 40px;
    border-radius: 20px;
    .MuiChip-icon {
      color: white;
    }
    :focus {
      background-color: ${({ active }) => (active ? "white" : "transparent")};
    }
    :hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const Title = styled.div`
  font-size: 30px;
  div {
    font-size: 20px;
    opacity: 0.6;
  }
  margin: 40px 0;
`;

interface LoadRootState {
  loadUser: {
    loading: boolean;
    isAuthenticated: boolean;
    user: {
      watchLists: Array<{ name: string; symbols: Array<string> }>;
      id: string;
      name: string;
      email: string;
    };
  };
}
interface LoginRootState {
  login: {
    loading: boolean;
    error: string;
    isAuthenticated: boolean;
    user: {
      watchLists: Array<{ name: string; symbols: Array<string> }>;
      id: string;
      name: string;
      email: string;
    };
  };
}

interface QuoteRootState {
  quote: {
    data: any;
    loading: boolean;
    error: { message: string };
  };
}

const Dashboard = () => {
  const dispatch = useDispatch();
  const [activeWatchList, setActiveWatchList] = useState({
    name: "",
    symbols: [""],
  });
  const [currentUser, setCurrentUser] = useState<any>({});
  const [openSymbol, setOpenSymbol] = useState(false);
  const [openWatchlist, setOpenWatchlist] = useState(false);
  const [newWatchlist, setNewWatchlist] = useState("");

  const [newSymbol, setNewSymbol] = useState("");
  const radioGroupRef = useRef<HTMLElement>(null);

  const isAuthenticatedLogin = useSelector(
    (state: LoginRootState) => state.login.isAuthenticated
  );
  const isAuthenticatedLoadUser = useSelector(
    (state: LoadRootState) => state.loadUser.isAuthenticated
  );
  const loggedInUser = useSelector((state: LoginRootState) => state.login.user);
  const loadedUser = useSelector((state: LoadRootState) => state.loadUser.user);
  const loggedInUserLoading = useSelector(
    (state: LoginRootState) => state.login.loading
  );
  const loadedUserLoading = useSelector(
    (state: LoadRootState) => state.loadUser.loading
  );

  const quoteData: any = useSelector(
    (state: QuoteRootState) => state.quote.data
  );
  const quoteDataLoading: any = useSelector(
    (state: QuoteRootState) => state.quote.loading
  );

  const handleDeleteWatchList = () => {
    console.log("delete");
  };

  useEffect(() => {
    dispatch(loadUser(localStorage.getItem("token") || ""));
    const symbols = loggedInUser.watchLists
      ? loggedInUser.watchLists[0].symbols
      : loadedUser.watchLists
      ? loadedUser.watchLists[0].symbols
      : [];
    dispatch(getQuote(symbols.join(",")));
    activeWatchList.name != "" &&
      setActiveWatchList(
        loadedUser
          ? loadedUser.watchLists[0]
          : loggedInUser
          ? loggedInUser.watchLists[0]
          : { name: "", symbols: [""] }
      );
    setCurrentUser(loadedUser ? loadedUser : loggedInUser ? loggedInUser : {});
  }, [loadUser, getQuote]);

  useEffect(() => {
    dispatch(loadUser(localStorage.getItem("token") || ""));
  }, [newWatchlist, newSymbol]);

  const handleAddWatchList = () => {
    setOpenWatchlist(true);
  };

  const handleCreateWatchList = () => {
    setCurrentUser({
      ...currentUser,
      watchLists: [
        ...currentUser.watchLists,
        { name: newWatchlist, symbols: [] },
      ],
    });
    setActiveWatchList({ name: newWatchlist, symbols: [] });
    dispatch(
      createWatchlist({
        watchlistName: newWatchlist,
        token: localStorage.getItem("token") || "",
      })
    );
    setOpenWatchlist(false);
  };

  const handleSetActiveWatchList = (item: any) => {
    setActiveWatchList(item);
    dispatch(getQuote(item.symbols.join(",")));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewWatchlist(event.target.value);
  };

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleAddSymbol = () => {
    setOpenSymbol(false);
    setActiveWatchList({
      name: activeWatchList.name,
      symbols: [...activeWatchList.symbols, newSymbol],
    });
    dispatch(
      addSymbol({
        symbolName: newSymbol,
        watchlistName: activeWatchList.name,
        token: localStorage.getItem("token") || "",
      })
    );
    dispatch(getQuote(activeWatchList.symbols.concat(newSymbol).join(",")));
  };

  const handleSymbolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewSymbol((event.target as HTMLInputElement).value);
  };

  return (
    <PageWrapper home={false}>
      <Menu headerText="Watchlists" />
      {(isAuthenticatedLogin || isAuthenticatedLoadUser) && (
        <div className="main">
          {currentUser &&
            currentUser.watchLists &&
            currentUser.watchLists.length > 0 && (
              <div>
                {(currentUser as any).watchLists.map((item: any) => (
                  <StyledChip
                    key={item.name}
                    label={item.name}
                    clickable
                    onDelete={handleDeleteWatchList}
                    onClick={() => handleSetActiveWatchList(item)}
                    deleteIcon={<CloseIcon />}
                    active={activeWatchList.name === item.name}
                  />
                ))}
                <StyledChip
                  icon={<AddIcon />}
                  label={"CREATE NEW WATCHLIST"}
                  clickable
                  onClick={() => handleAddWatchList()}
                  active={false}
                />
              </div>
            )}
          <AddButton onClick={() => setOpenSymbol(true)} />
          <Title>
            {activeWatchList.name}
            <div>{activeWatchList.symbols.length} items</div>
          </Title>
          {!quoteDataLoading && quoteData.length > 0 && (
            <WatchListTable quote={quoteData} />
          )}
          <Dialog
            open={openWatchlist}
            onClose={() => setOpenWatchlist(false)}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Create Watchlist</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter the name of your new watchlist.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="New Watchlist Name"
                type="email"
                fullWidth
                onChange={handleChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenWatchlist(false)} color="primary">
                Cancel
              </Button>
              <Button onClick={handleCreateWatchList} color="primary">
                Done
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            maxWidth="xs"
            onEntering={handleEntering}
            aria-labelledby="confirmation-dialog-title"
            open={openSymbol}
          >
            <DialogTitle>Symbols</DialogTitle>
            <DialogContent dividers>
              <RadioGroup
                ref={radioGroupRef}
                aria-label="symbols"
                name="symbols"
                value={newSymbol}
                onChange={handleSymbolChange}
              >
                {options.map((option) => (
                  <FormControlLabel
                    value={option}
                    key={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={() => setOpenSymbol(false)}
                color="primary"
              >
                Cancel
              </Button>
              <Button onClick={handleAddSymbol} color="primary">
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </PageWrapper>
  );
};

export default Dashboard;
