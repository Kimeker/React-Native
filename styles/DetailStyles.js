import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  infoContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  regularText: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 20,
  },
  redText: {
    fontSize: 18,
    color: '#800000',
    marginBottom: 10,
    marginLeft: 20,
  },
});