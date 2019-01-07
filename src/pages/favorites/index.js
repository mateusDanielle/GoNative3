import React, { Component } from "react";

import { View, Text, FlatList } from "react-native";

import styles from "./styles";

import FavoriteItem from "./components/favoriteItem";

export default class Favorites extends Component {
  static navigationOptions = {
    title: "Meus favoritos"
  };

  state = {
    favorites: [
      {
        id: 80149262,
        node_id: "MDEwOlJlcG9zaXRvcnk4MDE0OTI2Mg==",
        name: "react-navigation",
        full_name: "react-navigation/react-navigation",
        private: false,
        owner: {
          login: "react-navigation",
          id: 29647600,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjI5NjQ3NjAw",
          avatar_url: "https://avatars2.githubusercontent.com/u/29647600?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/react-navigation",
          html_url: "https://github.com/react-navigation",
          followers_url:
            "https://api.github.com/users/react-navigation/followers",
          following_url:
            "https://api.github.com/users/react-navigation/following{/other_user}",
          gists_url:
            "https://api.github.com/users/react-navigation/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/react-navigation/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/react-navigation/subscriptions",
          organizations_url:
            "https://api.github.com/users/react-navigation/orgs",
          repos_url: "https://api.github.com/users/react-navigation/repos",
          events_url:
            "https://api.github.com/users/react-navigation/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/react-navigation/received_events",
          type: "Organization",
          site_admin: false
        },
        html_url: "https://github.com/react-navigation/react-navigation",
        description: "Routing and navigation for your React Native apps",
        fork: false,
        url: "https://api.github.com/repos/react-navigation/react-navigation",
        forks_url:
          "https://api.github.com/repos/react-navigation/react-navigation/forks",
        keys_url:
          "https://api.github.com/repos/react-navigation/react-navigation/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/react-navigation/react-navigation/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/react-navigation/react-navigation/teams",
        hooks_url:
          "https://api.github.com/repos/react-navigation/react-navigation/hooks",
        issue_events_url:
          "https://api.github.com/repos/react-navigation/react-navigation/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/react-navigation/react-navigation/events",
        assignees_url:
          "https://api.github.com/repos/react-navigation/react-navigation/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/react-navigation/react-navigation/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/react-navigation/react-navigation/tags",
        blobs_url:
          "https://api.github.com/repos/react-navigation/react-navigation/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/react-navigation/react-navigation/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/react-navigation/react-navigation/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/react-navigation/react-navigation/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/react-navigation/react-navigation/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/react-navigation/react-navigation/languages",
        stargazers_url:
          "https://api.github.com/repos/react-navigation/react-navigation/stargazers",
        contributors_url:
          "https://api.github.com/repos/react-navigation/react-navigation/contributors",
        subscribers_url:
          "https://api.github.com/repos/react-navigation/react-navigation/subscribers",
        subscription_url:
          "https://api.github.com/repos/react-navigation/react-navigation/subscription",
        commits_url:
          "https://api.github.com/repos/react-navigation/react-navigation/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/react-navigation/react-navigation/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/react-navigation/react-navigation/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/react-navigation/react-navigation/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/react-navigation/react-navigation/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/react-navigation/react-navigation/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/react-navigation/react-navigation/merges",
        archive_url:
          "https://api.github.com/repos/react-navigation/react-navigation/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/react-navigation/react-navigation/downloads",
        issues_url:
          "https://api.github.com/repos/react-navigation/react-navigation/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/react-navigation/react-navigation/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/react-navigation/react-navigation/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/react-navigation/react-navigation/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/react-navigation/react-navigation/labels{/name}",
        releases_url:
          "https://api.github.com/repos/react-navigation/react-navigation/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/react-navigation/react-navigation/deployments",
        created_at: "2017-01-26T19:51:40Z",
        updated_at: "2019-01-07T11:23:57Z",
        pushed_at: "2019-01-03T21:10:34Z",
        git_url: "git://github.com/react-navigation/react-navigation.git",
        ssh_url: "git@github.com:react-navigation/react-navigation.git",
        clone_url: "https://github.com/react-navigation/react-navigation.git",
        svn_url: "https://github.com/react-navigation/react-navigation",
        homepage: "https://reactnavigation.org",
        size: 12600,
        stargazers_count: 14353,
        watchers_count: 14353,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        forks_count: 3032,
        mirror_url: null,
        archived: false,
        open_issues_count: 82,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA="
        },
        forks: 3032,
        open_issues: 82,
        watchers: 14353,
        default_branch: "master",
        organization: {
          login: "react-navigation",
          id: 29647600,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjI5NjQ3NjAw",
          avatar_url: "https://avatars2.githubusercontent.com/u/29647600?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/react-navigation",
          html_url: "https://github.com/react-navigation",
          followers_url:
            "https://api.github.com/users/react-navigation/followers",
          following_url:
            "https://api.github.com/users/react-navigation/following{/other_user}",
          gists_url:
            "https://api.github.com/users/react-navigation/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/react-navigation/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/react-navigation/subscriptions",
          organizations_url:
            "https://api.github.com/users/react-navigation/orgs",
          repos_url: "https://api.github.com/users/react-navigation/repos",
          events_url:
            "https://api.github.com/users/react-navigation/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/react-navigation/received_events",
          type: "Organization",
          site_admin: false
        },
        network_count: 3032,
        subscribers_count: 349
      }
    ]
  };

  renderList = () => (
    <FlatList
      data={this.state.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <FavoriteItem favorite={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {!this.state.favorites.length ? (
          <Text style={styles.empty}>Nenhum favorito adicionado</Text>
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
