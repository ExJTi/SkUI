import backCfgForm from './metaData/backCfgForm'
export default {
  BackupConfig() {
    this.dispatch('OpenFullDialog', { metaData: backCfgForm });
  }
};
