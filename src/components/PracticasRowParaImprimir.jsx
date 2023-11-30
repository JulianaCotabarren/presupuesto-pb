import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 400,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  nro: {
    width: 50,
    fontSize: 11,
    paddingBottom: 5,
    paddingLeft: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  codigo: {
    width: 80,
    fontSize: 11,
    paddingBottom: 5,
    paddingLeft: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  practica: {
    width: 270,
    fontSize: 11,
    paddingBottom: 5,
    paddingLeft: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const PracticasRowParaImprimir = ({ id, nroPractica, nombre }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.nro}>{nroPractica}</Text>
        <Text style={styles.codigo}>{id}</Text>
        <Text style={styles.practica}>{nombre}</Text>
      </View>
    </>
  );
};

export default PracticasRowParaImprimir;
