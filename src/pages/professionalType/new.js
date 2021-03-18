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
} from "@material-ui/core";
import styles from "./styles";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descricao: "",
      situacao: true,
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

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { descricao, situacao } = this.state;

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
      </Grid>
    );
  }
}

export default New;
