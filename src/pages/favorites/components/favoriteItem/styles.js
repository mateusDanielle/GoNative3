import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.baseMargin * 2,
    marginHorizontal: metrics.baseMargin * 2,
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    height: 54,
    width: 54
  },
  info: {
    marginLeft: metrics.baseMargin,
    flex: 1
  },
  title: {
    color: colors.darker,
    fontWeight: "bold"
  },
  description: {
    color: colors.dark,
    fontSize: 12,
    marginTop: 3
  }
});

export default styles;
