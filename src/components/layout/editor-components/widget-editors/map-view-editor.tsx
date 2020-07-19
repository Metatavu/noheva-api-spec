import { WithStyles, Typography, Divider, withStyles } from "@material-ui/core";
import { PageLayoutView, PageLayoutViewProperty, PageLayoutViewPropertyType } from "../../../../generated/client";
import styles from "../../../../styles/common-properties-editor";
import * as React from "react";
import theme from "../../../../styles/theme";
import strings from "../../../../localization/strings";
import { LayoutMapViewPropKeys } from "../../editor-constants/keys";
import GenericPropertyTextField from "../generic-property-textfield";
import { getProperty } from "../../utils/tree-data-utils";


/**
 * Interface representing component properties
 */
interface Props extends WithStyles<typeof styles> {
    pageLayoutView: PageLayoutView;

    /**
     * On value change handler
     * 
     * 
     */
    onValueChange: (updatedPageLayoutView: PageLayoutViewProperty) => void;
}

/**
 * Interface representing component state
 */
interface State {
}

/**
 * Component for editing map view properties
 */
class MapViewEditor extends React.Component<Props, State> {
    /**
     * Constructor
     * 
     * @param props component properties
     */
    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }

    /**
     * Component render method
     */
    public render() {
      return (
        <>
        { this.renderSrcEditor() }
        { this.renderSqlFilterQueryEditor() }
        </>
      );
    }

    private renderSrcEditor = () => {
      return (
        <>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography
                style={{ marginRight: theme.spacing(2), whiteSpace: "nowrap" }}
                variant="h4"
            >
              { strings.layoutEditor.mapView.src }:
            </Typography>
            <GenericPropertyTextField
                textFieldId={ LayoutMapViewPropKeys.Src }
                textFieldType="text"
                property={ getProperty(this.props.pageLayoutView, LayoutMapViewPropKeys.Src, PageLayoutViewPropertyType.String) }
                onTextFieldChange={ this.props.onValueChange }
            />
            </div>
            <Divider variant="fullWidth" color="rgba(0,0,0,0.1)" style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }} />
        </>
      );
    }

    private renderSqlFilterQueryEditor = () => {
      return (
        <>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography
                style={{ marginRight: theme.spacing(2), whiteSpace: "nowrap" }}
                variant="h4"
            >
              { strings.layoutEditor.mapView.sqlFilterQuery }:
            </Typography>
            <GenericPropertyTextField
                textFieldId={ LayoutMapViewPropKeys.SqlFilterQuery}
                textFieldType="text"
                property={ getProperty(this.props.pageLayoutView, LayoutMapViewPropKeys.SqlFilterQuery, PageLayoutViewPropertyType.String) }
                onTextFieldChange={ this.props.onValueChange }
            />
            </div>
            <Divider variant="fullWidth" color="rgba(0,0,0,0.1)" style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }} />
        </>
      );
    }
}

export default (withStyles(styles)(MapViewEditor));