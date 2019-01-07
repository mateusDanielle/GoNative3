import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: metrics.basePadding * 2
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontWeight: "bold"
  },
  description: {
    fontSize: 14,
    color: colors.white,
    marginTop: metrics.baseMargin / 2,
    textAlign: "center",
    lineHeight: 20
  },
  form: {
    marginTop: metrics.baseMargin * 2,
    alignSelf: "stretch"
  },
  input: {
    height: 50,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding
  },
  button: {
    height: 50,
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    justifyContent: "center",
    alignItems: "center",
    marginTop: metrics.baseMargin
  },
  buttonText: {
    fontSize: 14,
    color: colors.darkTransparent,
    fontWeight: "bold"
  },
  error: {
    fontWeight: "bold",
    color: colors.danger,
    alignSelf: "center",
    marginTop: metrics.baseMargin
  },
  loading: {
    color: colors.darkTransparent
  },
  footer: {
    paddingBottom: metrics.basePadding
  },
  footerLink: {
    fontSize: 14,
    color: colors.white,
    fontWeight: "bold"
  }
});

export default styles;
