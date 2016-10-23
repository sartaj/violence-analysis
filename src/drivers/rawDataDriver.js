import xs from 'xstream';
import data from '../../data/data.js';

export default function storageDriver() {
  return xs.of(data);
}
