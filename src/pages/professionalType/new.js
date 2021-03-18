import React, { Component } from "react";
import {
  Typography,
  TextField,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  FormControl,
  FormLabel,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
} from "@material-ui/core";
import { create } from "../../services/professionalType";
import styles from "./styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      descricao: "",
      situacao: true,
      error: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  }

  onClose = () => {
    this.setState({
      open: false,
    });
  };

  async onSubmit(event) {
    event.preventDefault();
    const { state } = this;
    const response = await create(state);

    this.setState({
      open: true,
      error: !response,
    });
  }

  getDialogMsg = () => {
    const { error } = this.state;
    let msg;

    if (error) {
      msg = "Houve algum problema ao salvar o tipo de profissional.";
    } else msg = "Tipo de profissional adicionado com sucesso.";

    return msg;
  };

  render() {
    const { descricao, situacao, open } = this.state;

    return (
      <Grid container direction={"row"} spacing={4}>
        <Grid item sm={12}>
          <Typography variant="h4">Novo tipo de profissional</Typography>
        </Grid>
        <Grid item sm={12} md={8} lg={6} xl={4}>
          <Paper style={styles.paper}>
            <form onSubmit={this.onSubmit}>
              <Grid container spacing={3} direction={"column"}>
                <TextField
                  label={"Descrição"}
                  fullWidth
                  style={styles.textField}
                  name={"descricao"}
                  value={descricao}
                  onChange={this.onChange}
                />

                <Grid container sm={6} direction={"column"}>
                  <FormControl component="fieldset">
                    <FormLabel component="label" style={styles.label}>
                      Situação
                    </FormLabel>
                    <RadioGroup
                      name="situacao"
                      aria-label="situacao"
                      value={situacao.toString()}
                      onChange={this.onChange}
                    >
                      {[true, false].map((value) => (
                        <FormControlLabel
                          key={value}
                          value={value.toString()}
                          control={<Radio />}
                          label={value ? "Ativo" : "Inativo"}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Button
                  type={"submit"}
                  disabled={!descricao.length}
                  variant="contained"
                  color="primary"
                >
                  Salvar
                </Button>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.onClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Adicionar tipo de profissional"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {this.getDialogMsg()}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    );
  }
}

export default New;
