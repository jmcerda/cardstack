import AdapterMixin from 'ember-resource-metadata/adapter-mixin';
import DS from 'ember-data';
import { hubURL } from '@cardstack/hub/environment';

export default DS.JSONAPIAdapter.extend(AdapterMixin, {
  host: hubURL,
  namespace: 'api'
});
