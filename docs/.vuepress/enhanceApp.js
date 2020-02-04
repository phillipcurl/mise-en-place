// const MiseEnPlace = require("./../../dist/mise-en-place.min");
import MiseEnPlace from './../../lib/entry';

export default ({ Vue, isServer }) => {
	// Vue.use(MiseEnPlace);
	Vue.use(MiseEnPlace, {
		sizes: ['20rem', '30rem', '40rem']
	});
};
