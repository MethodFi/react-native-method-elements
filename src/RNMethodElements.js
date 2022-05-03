import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { URLSearchParams } from 'react-native-url-polyfill';

const styles = StyleSheet.create({ container: { flex: 1 } });

export default function RNMethodElements(props) {
  const noop = () => {};
  const {
    token,
    env = 'dev',
    onOpen = noop,
    onError = noop,
    onExit = noop,
    onSuccess = noop,
    onEvent = noop,
  } = props;

  const handleNavigationStateChange = (event) => {
    if (event.url.startsWith('methodelements://')) {
      const searchParams = new URLSearchParams(`?${event.url.split('?')[1]}`);
      const params = Object.fromEntries(searchParams);
      const op = searchParams.get('op');
      let response = { ...params };

      if (params.accounts) response.accounts = JSON.parse(params.accounts);

      switch (op) {
        case 'open': onOpen(response); break;
        case 'error': onError(response); break;
        case 'exit': onExit(response); break;
        case 'success': onSuccess(response); break;
        default:
      }

      if (onEvent) onEvent(event);

      return false;
    }

    return true;
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: `https://elements.${env}.methodfi.com/?token=${token}` }}
        originWhitelist={['https://*', 'methodelements://*']}
        onShouldStartLoadWithRequest={handleNavigationStateChange} />
    </View>
  );
}
