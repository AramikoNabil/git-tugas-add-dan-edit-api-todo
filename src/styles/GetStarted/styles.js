import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  container1: {
    backgroundColor: 'black',
    height: 210,
    borderRadius: 30,
    marginTop: 20,
  },
  img: {
    width: 260,
    height: 272,
    alignSelf: 'center',
    marginTop: 30,
  },
  font1: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
  font2: {
    fontWeight: 'bold',
    color: '#FF730E',
    fontSize: 30,
  },
  font3: {
    color: 'white',
    textAlign: 'center',
    // marginBottom: 50,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#FC4315',
    position: 'absolute',
    width: 223,
    height: 65,
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 100,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
