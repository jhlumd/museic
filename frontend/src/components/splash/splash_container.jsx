import { connect } from 'react-redux';
import Splash from './splash';
import { openModal } from '../../actions/modal_actions';

import { fetchSnippet } from '../../actions/snippet_actions';
import { saveTempNotes } from '../../actions/temp_notes_actions';

const mapStateToProps = state => ({
  tempNotes: state.ui.tempNotes
});

const mapDispatchToProps = dispatch => ({
  fetchSnippet: snippetId => dispatch(fetchSnippet(snippetId)), 
  saveTempNotes: tempNotes => dispatch(saveTempNotes(tempNotes)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
