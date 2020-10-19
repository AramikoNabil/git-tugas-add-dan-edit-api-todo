import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#111222',
    flex: 1,
  },
  header: {
    // backgroundColor: '',
  },
  fontTitle: {
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  fontBody: {
    // alignSelf: 'center',
    fontSize: 15,
    marginLeft: 10,
    flex: 1,
    color: '#404f40',
    fontWeight: 'bold',
  },
  body: {
    flexDirection: 'row',
    marginTop: 18,
    borderRadius: 6,
    alignSelf: 'stretch',
    height: 65,
    backgroundColor: '#c9fdc9',
    padding: 10,
  },

  trashIcon: {
    alignSelf: 'center',
  },
  barIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
  },

  containerinput: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderRadius: 6,
    justifyContent: 'space-between',
    // backgroundColor: 'black',
  },
  fontadd: {
    alignSelf: 'center',
    marginRight: 20,
  },
  font: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  timeContainer: {
    marginTop: 30,
  },
  time: {
    color: 'white',
  },
  inputtitle: {
    width: 190,
    height: 100,
    elevation: 1,
  },
  plusButton: {
    // top: 50,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  containerModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  popupModal: {
    backgroundColor: '#ffffff',
    marginTop: 120,
    padding: 40,
    borderRadius: 20,
  },
});
