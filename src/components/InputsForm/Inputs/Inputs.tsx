import { Component, RefObject } from "react";
import { Grid } from "@mui/material";
import "./Inputs.css";

interface InputProps {
  title: string;
  autofocus?: RefObject<HTMLInputElement>;
  errorHelper?: string;
  state?: string;
  currentValue?: string;
  handleChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  testId: string;
}

class Inputs extends Component<InputProps> {
  render() {
    const {
      errorHelper,
      autofocus,
      state,
      currentValue,
      handleChange,
      testId,
    } = this.props;

    let helper;
    let inputClassName = `large_${state}`;

    const wrapperClassName = `inputForm ${state} `;

    if (state === "error") {
      helper = <p className="errorHelper">{errorHelper}</p>;
    }
    return (
      <div className={wrapperClassName}>
        <Grid
          container
          direction="row"
          rowSpacing={{ xs: 1, sm: 1, md: 1 }}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <div className="title-input" data-testid={`input-${testId}`}>
              {this.props.title}
            </div>
          </Grid>
          <Grid item xs={12}>
            <input
              ref={autofocus}
              className={inputClassName}
              type="text"
              onChange={handleChange || (() => {})}
              value={currentValue}
              data-testid={testId}
            />
          </Grid>
          <Grid item xs={12}>
            {helper}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Inputs;
