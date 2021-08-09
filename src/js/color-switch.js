import { btnStart, btnStop} from './refs.js';
import { onColorSwitchStart, onColorSwitchStop } from './listeners.js';

btnStart.addEventListener('click', onColorSwitchStart);
btnStop.addEventListener('click', onColorSwitchStop);



