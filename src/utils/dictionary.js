import dictionary from 'sky-engine/utils/dictionary';

const localDictionary = {
  userState: {
    DISABLE: { label: 'dictionary.forbidden', type: 'error' },
    ENABLE: { label: 'dictionary.use', type: 'normal' }
  },
  imageFileState: {
    CREATING: { label: 'dictionary.creating', type: 'ing' },
    DELETING: { label: 'dictionary.deleting', type: 'ing' },
    AVAILABLE: { label: 'dictionary.complete', type: 'normal' }
  },
  enableDefault: {
    true: { label: 'dictionary.true', type: 'success' },
    false: { label: 'dictionary.false', type: 'info' }
  },
  detectState: {
    CHECKING: { label: 'dictionary.checking', type: 'ing' },
    SUCCESS: { label: 'dictionary.detectingSuccess', type: 'success' },
    ERROR: { label: 'dictionary.detectingError', type: 'error' },
    WAIT: { label: 'dictionary.waiting', type: 'ing' },
    WITHOUTCHECKED: { label: 'dictionary.withoutChecked', type: 'warning' }
  },
  state: {
    UPGRADING: { label: 'dictionary.isUpgrading', type: 'ing' },
    CLOSING: { label: 'dictionary.isCloseing', type: 'ing' },
    FINISH: { label: 'dictionary.isFinish', type: 'stop' }
  }

};
for (const key in localDictionary) {
  if (localDictionary.hasOwnProperty(key)) {
    dictionary[key] = localDictionary[key];
  }
}
export default dictionary;
