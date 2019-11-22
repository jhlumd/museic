import { connect } from 'react-redux';

import SnippetIndex from './index';

const mapStateToProps = (state) => {
  return {
    snippets: state.entities.snippets
  }
}

const mapDispatchToProps = dispatch => {
  return{
    someFunction: 'someFunction'
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(SnippetIndex)