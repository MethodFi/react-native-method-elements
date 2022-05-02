import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { URLSearchParams } from 'react-native-url-polyfill';

export default function RNMethodElements (props) {
  const { token, env } = props

  const handleNavigationStateChange = (event) => {
    if (event.url.startsWith('methodelements://')) {
      const searchParams = new URLSearchParams(`?${event.url.split('?')[1]}`);
      const params = Object.fromEntries(searchParams);
      const op = searchParams.get('op')

      let response = {...params}
      if (params.accounts) {
        response['accounts'] = JSON.parse(params.accounts)
      }      

      switch (op) {
        case 'open': return props.onOpen && props.onOpen(response);

        case 'error': return props.onError && props.onError(response);

        case 'exit': return props.onExit && props.onExit(response);

        case 'success': return props.onSuccess && props.onSuccess(response);
        default:
      }

      if (props.onEvent) props.onEvent(event);

      return false; // return false to stop loading
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri:  `https://elements.${env}.methodfi.com/?token=${token}`
        }}
        originWhitelist={['https://*', 'methodelements://*']}
        onShouldStartLoadWithRequest={handleNavigationStateChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});