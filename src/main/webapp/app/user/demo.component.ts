import { defineComponent, inject, onMounted, ref, type Ref } from 'vue';
import { DemoService } from './demo.service';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'DemoComponent',
  setup() {
    const demoService = inject('documentService', () => new DemoService());

    const username: Ref<string> = ref(null);

    onMounted(async () => {
      await retrieveUser();
    });

    const retrieveUser = async () => {
      const res = await demoService().retrieve();
      username.value = res;
    };
  },
});
