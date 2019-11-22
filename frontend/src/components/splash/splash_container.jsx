import { connect } from 'react-redux';
import Splash from './splash';

import { fetchSnippet } from '../../actions/snippet_actions';
import { saveTempNotes } from '../../actions/temp_notes_actions';

const mapStateToProps = state => ({
  //demos imported straight to splash snippet demo component -Jae
});

const mapDispatchToProps = dispatch => ({
  fetchSnippet: snippetId => dispatch(fetchSnippet(snippetId)), 
  saveTempNotes: tempNotes => dispatch(saveTempNotes(tempNotes))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
