/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

var styles = {
  ...dashboardStyle,
  cardTitle: {
    marginTop: "0",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function Notifications() {
  const classes = useStyles();
  return (<div>
    <Card>
      <CardHeader color="danger">
        <h4 className={classes.cardTitle}>تسجيل الدخول</h4>
      </CardHeader>
      <CardBody>
        The place is close to Barceloneta Beach and bus stop just 2 min by
        walk and near to "Naviglio" where you can enjoy the main night
        life in Barcelona...
      </CardBody>
    </Card>
  </div>);
}
