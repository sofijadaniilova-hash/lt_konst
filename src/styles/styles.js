import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#f0f4f8', padding:20 },
  title: { fontSize:26, fontWeight:'bold', marginBottom:40 },
  button: { backgroundColor:'#4f46e5', padding:15, borderRadius:10 },
  buttonText: { color:'#fff', fontSize:18 },
  counter: { fontSize:18, marginBottom:20 },
  card: { padding:20, backgroundColor:'#fff', borderRadius:10, marginBottom:20, width:'100%', shadowColor:'#000', shadowOpacity:0.1, shadowRadius:5 },
  question: { fontSize:18, marginBottom:20 },
  option: { backgroundColor:'#e0e7ff', padding:12, borderRadius:8, marginBottom:10 },
  score: { fontSize:22, marginBottom:40 }
});

export default styles;
