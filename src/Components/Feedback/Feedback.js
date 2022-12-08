import React, { useEffect, useState } from "react";
import "react-profile-avatar/dist/index.css";
import "./feedback.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { TextField } from "@mui/material";

function Feedback() {
  const [value, setValue] = useState();
  const [username, setUsername] = useState("");
  const [addedFeedback, setAddedFeedback] = useState("");
  const [showMore, setShowMore] = useState({ showMore: false, index: null });
  const history = useHistory();

  const changeAddedFeedback = (event) => {
    setAddedFeedback(event.target.value);
  };
  const changeUser = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (id) => {
    axios
      .post("http://localhost:3001/auth/feedback", {
        username: username,
        addedFeedback: addedFeedback,
        id,
      })
      .then((response) => {
        console.log("FBresponse ", response);
        if (response.data.success) {
          console.log(response);
        }
        setUsername("");
        setAddedFeedback("");
      })
      .catch((err) => {
        console.log(err, "gfdg");
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/auth/getFeedback").then((response) => {
      if (response.data.success) {
        console.log(response, "response");
        setValue(response.data.value);
      }
    });
  }, []);

  const handlemoredata = (index, ID, NAME, FEEDBACK) => {
    const data = { NAME: NAME, FEEDBACK: FEEDBACK };
    setShowMore({
      showMore:
        showMore.index === index ? (showMore.showMore ? false : true) : true,
      index: index,
    });
    history.push(`/more/${ID}`, { state: data });
  };
  return (
    <div className="divbox">
      <div className="Feedback">
        {value &&
          value.map((item, index) => {
            console.log(index, "index");
            return (
              <Card sx={{ width: 345 }}>
                <img
                  src="http://www.defineinternational.com/wp-content/uploads/2014/06/dummy-profile.png"
                  alt="Avatar"
                  className="avatar"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dr.{item.NAME}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.QUALIFICATION}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    {showMore.index === index && showMore.showMore
                      ? item.FEEDBACK
                      : `${item.FEEDBACK}`.slice(0, 100)}
                    <Button
                      size="small"
                      key={item.ID}
                      onClick={() => {
                        handlemoredata(
                          index,
                          item.ID,
                          item.NAME,
                          item.FEEDBACK
                        );
                      }}
                    >
                      {showMore.index === index && showMore.showMore
                        ? "  hide"
                        : "  More feedback on doctor"}
                    </Button>
                  </Typography>
                </CardContent>
                <CardActions>
                  <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                      <div>
                        <Button
                          variant="outlined"
                          size="small"
                          key={item.ID}
                          {...bindTrigger(popupState)}
                        >
                          Add
                        </Button>
                        <Popover
                          {...bindPopover(popupState)}
                          anchorOrigin={{
                            top: "25%",
                            margin: "auto",
                          }}
                          transformOrigin={{
                            top: "25%",
                            margin: "auto",
                          }}
                        >
                          <Typography sx={{ p: 2 }}>
                            <TextField
                              autoFocus="true"
                              margin="dense"
                              id="name"
                              label="Name"
                              type="name"
                              value={username}
                              color="secondary"
                              variant="outlined"
                              onChange={changeUser}
                            />
                            <br></br>
                            <TextField
                              autoFocus="true"
                              margin="dense"
                              id="feedback"
                              value={addedFeedback}
                              label="Feedback"
                              color="secondary"
                              type="feedback"
                              variant="outlined"
                              onChange={changeAddedFeedback}
                            />
                            <br></br>
                            <Button
                              onClick={() => {
                                handleSubmit(item.ID);
                              }}
                              sx={{ color: "purple" }}
                            >
                              Submit
                            </Button>
                          </Typography>
                        </Popover>
                      </div>
                    )}
                  </PopupState>
                </CardActions>
              </Card>
            );
          })}
      </div>
    </div>
  );
}
export default Feedback;
