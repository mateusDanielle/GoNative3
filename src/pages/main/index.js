import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as FavoriteActions from "~/store/actions/favorites";

import styles from "./styles";

class Main extends Component {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired,
    addFavoritesRequest: PropTypes.func.isRequired,
    favoritesCount: PropTypes.number.isRequired,
    error: PropTypes.oneOfType([null, PropTypes.string]),
    loading: PropTypes.bool.isRequired
  };

  state = {
    repoNameInput: ""
  };

  navigateToFavorites = () => {
    this.props.navigation.navigate("Favorites");
  };

  addRepository = () => {
    const { repoNameInput } = this.state;
    const { addFavoritesRequest } = this.props;

    if (!repoNameInput.length) return;

    addFavoritesRequest(repoNameInput);

    this.setState({ repoNameInput: "" });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.content}>
          <Text style={styles.title}>Gitmark</Text>
          <Text style={styles.description}>
            Comece adicionando alguns repositórios aos seus favoritos.
          </Text>

          {!!this.props.error && (
            <Text style={styles.error}>{this.props.error}</Text>
          )}

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="usuário/repositório"
              underlineColorAndroid="transparent"
              value={this.state.repoNameInput}
              onChangeText={repoNameInput => this.setState({ repoNameInput })}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={this.addRepository}
              activeOpacity={0.6}
            >
              {this.props.loading ? (
                <ActivityIndicator
                  size={"small"}
                  color={styles.loading.color}
                />
              ) : (
                <Text style={styles.buttonText}>Adicionar aos favoritos.</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={styles.footerLink}>
              Meus favoritos ({this.props.favoritesCount})
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  favoritesCount: state.favorites.data.length,
  error: state.favorites.error,
  loading: state.favorites.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
