import {
  Button,
  Card,
  CardContent,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import "./moreFeedback.css";
import { useDispatch, useSelector } from "react-redux";
import { replyAPI } from "../../API/replyAPI";
import feedbackAPI from "../../API/feedbackAPI";
import Comments from "../Comments/comments";

function MoreFeedback() {
  const doctorId = useParams().id;
  const [name, setName] = useState("");
  const [reply, setReply] = useState("");

  const location = useLocation();
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedbackList.feedbacks);

  useEffect(() => {
    dispatch(feedbackAPI(doctorId));
  }, []);

  console.log(feedback, "feedback");
  const handleUser = (event) => {
    setName(event.target.value);
  };
  const handleReply = (event) => {
    setReply(event.target.value);
  };

  const handleSubmit = (id, doctorid) => {
    dispatch(replyAPI(id, name, reply, doctorid));
    setName("");
    setReply("");
  };
  return (
    <div className="MoreFeedback">
      <h1 style={{ color: "INDIGO" }}>More Reviews Are Here</h1>
      <Card
        variant="outlined"
        sx={{ width: 1300, height: 200, border: "1px solid black" }}
      >
        <div className="first">
          <div className="card">
            <img
              src="http://www.defineinternational.com/wp-content/uploads/2014/06/dummy-profile.png"
              alt="Avatar"
              className="Avatar"
            />
            <h2 className="heading">Dr.{location.state.state.NAME}</h2>
          </div>
          <div>
            <p className="review">{location.state.state.FEEDBACK}</p>
          </div>
        </div>
      </Card>
      <h3>Reviews</h3>

      {feedback &&
        feedback.map((item) => {
          console.log(item.id);
          return (
            <div>
              <Card
                variant="outlined"
                sx={{ width: 1300, height: 140, border: "1px solid Indigo" }}
              >
                <CardContent>
                  <div className="content">
                    <div className="userimage">
                      <img
                        src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-File.png"
                        alt="Avatar"
                        className="image"
                      />
                    </div>
                    <div className="reply">
                      <Typography
                        variant="h5"
                        color="text.primary"
                        ALIGN="left"
                        key={item.ID}
                      >
                        {item.userfeedback}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        ALIGN="left"
                        key={item.ID}
                      >
                        {item.user}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                  <div>
                    <Button
                      variant="text"
                      size="large"
                      color="secondary"
                      key={item.ID}
                      {...bindTrigger(popupState)}
                    >
                      COMMENT ON THIS FEEDBACK
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
                          value={name}
                          color="secondary"
                          variant="outlined"
                          onChange={handleUser}
                        />
                        <br></br>
                        <TextField
                          autoFocus="true"
                          margin="dense"
                          id="reply"
                          value={reply}
                          label="Reply"
                          color="secondary"
                          type="reply"
                          variant="outlined"
                          onChange={handleReply}
                        />
                        <br></br>
                        <Button
                          onClick={() => {
                            handleSubmit(item.id, item.doctor_id);
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
              <Comments fb_id={item.id} dr_id={item.doctor_id} />
            </div>
          );
        })}
    </div>
  );
}

export default MoreFeedback;
