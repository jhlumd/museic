import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = state => ({
  snippets: [[0], [1], [2]] //replace with real demos later
});

const mapDispatchToProps = dispatch => ({
  // fetchSnippet: snippetId => dispatch(fetchSnippet), 
  // method to keep snippet in cookies or something while user registers
});


export default connect(mapStateToProps, mapDispatchToProps)(Splash);