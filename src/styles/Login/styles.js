import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#111222',
    flex: 1,
  },
  fontHeader: {
    alignSelf: 'center',
  },
  fontHeader1: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  fontEmail: {
    marginTop: 50,
    color: 'white',
  },
  fontInput: {
    backgroundColor: 'white',
    borderRadius: 6,
    height: 55,
  },
  fontPassword: {
    marginTop: 25,
    color: 'white',
  },
  fontInputPass: {
    height: 55,
    width: 250,
  },
  eyePassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
  },
  eye: {
    // padding: 10,
    width: 25,
    height: 15,
    marginRight: 20,
  },
  button: {
    backgroundColor: '#384DFE',
    width: 327,
    height: 48,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  fontForgetPass: {
    color: '#B0B0B0',
    alignSelf: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 15,
  },
  fontloginAnother: {
    alignSelf: 'center',
    marginTop: 25,
    fontSize: 13,
    color: '#B0B0B0',
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonFacebook: {
    height: 48,
    width: 150,
    backgroundColor: '#36589E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    flexDirection: 'row',
  },
  textFacebook: {
    color: 'white',
    fontSize: 14,
  },
  buttonGoogle: {
    height: 48,
    width: 150,
    backgroundColor: '#EB4132',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    flexDirection: 'row',
  },
  fontGoogle: {
    color: 'white',
    fontSize: 14,
  },
  textSignUp: {
    color: '#36589E',
    fontWeight: 'bold',
    fontSize: 18,
  },
  logo: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
});
