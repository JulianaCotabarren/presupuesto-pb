import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import PracticasRowParaImprimir from "../components/PracticasRowParaImprimir";
import { useEffect } from "react";
import usePracticasSeleccionadas from "../hooks/usePracticasSeleccionadas";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  titles: {
    marginTop: 40,
    marginBottom: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  h1: {
    fontSize: 25,
    marginBottom: 10,
  },
  h2: {
    fontSize: 21,
    marginBottom: 10,
  },
  h3: {
    fontSize: 19,
  },
  datosContainer: {
    backgroundColor: "#ececec",
    height: 20,
    width: 400,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  presupuesto: {
    fontSize: 12,
    marginLeft: 5,
    marginRight: 200,
  },
  fechaLabel: {
    width: 50,
    fontSize: 12,
  },
  fechaInput: {
    width: 80,
    fontSize: 12,
  },
  titulosTabla: {
    height: 25,
    width: 400,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    fontWeight: 600,
    backgroundColor: "#cacaca",
  },
  numero: {
    width: 50,
    fontSize: 10,
    margin: 0,
    paddingLeft: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  codigo: {
    width: 80,
    fontSize: 10,
    margin: 0,
    paddingLeft: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  practica: {
    width: 100,
    fontSize: 10,
    margin: 0,
    paddingLeft: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    width: 400,
    borderBottom: "1 solid grey",
    paddingBottom: 10,
    paddingTop: 10,
  },
  totalContainer: {
    height: 25,
    width: 400,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  label: {
    fontSize: 12,
    width: 50,
    textTransform: "uppercase",
    fontWeight: 500,
  },
  input: {
    fontSize: 12,
    width: 60,
    textAlign: "left",
  },
});

const SeccionAImprimir = ({ practicasSeleccionadas, total }) => {
  const { getPracticasSeleccionadas } = usePracticasSeleccionadas();

  useEffect(() => {
    const fetchData = async () => {
      await getPracticasSeleccionadas();
    };
    fetchData();
  }, []);

  const obtenerFechaActual = () => {
    const fecha = new Date();
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
  };
  const fecha = obtenerFechaActual();

  return (
    <Document>
      <Page size="A4">
        <View style={styles.container}>
          <View style={styles.titles}>
            <Text style={styles.h1}>MG LABORATORIO</Text>
            <Text style={styles.h2}>ANÁLISIS CLÍNICOS Y BACTERIOLÓGICOS</Text>
            <Text style={styles.h3}>Bioquímica: Dra. Mayra Gusso</Text>
          </View>
          <View style={styles.datosContainer}>
            <Text style={styles.presupuesto}>PRESUPUESTO</Text>
            <Text style={styles.fechaLabel}>Fecha:</Text>
            <Text style={styles.fechaInput}>{fecha}</Text>
          </View>
          <View style={styles.titulosTabla}>
            <Text style={styles.numero}>Nro</Text>
            <Text style={styles.codigo}>Código</Text>
            <Text style={styles.practica}>Práctica</Text>
          </View>
          <View style={styles.view}>
            {practicasSeleccionadas?.map((practicaSeleccionada, index) => (
              <PracticasRowParaImprimir
                key={practicaSeleccionada.id}
                id={practicaSeleccionada.id}
                nroPractica={index + 1}
                nombre={practicaSeleccionada.nombre}
                practicasSeleccionadas={practicasSeleccionadas}
              />
            ))}
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.label}>Total:</Text>
            <Text style={styles.input}>{`$${total}`}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default SeccionAImprimir;
