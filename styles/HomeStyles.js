import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  carContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carDetails: {
    fontSize: 16,
    marginBottom: 5,
  },
});