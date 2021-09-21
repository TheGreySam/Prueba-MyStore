import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vuex from "vuex";

const store = new Vuex.Store({
    state: {
        
    }
})

const localVue = createLocalVue()
localVue.use(Vuex)

describe("HelloWorld.vue", () => {
    it("should renders props.msg when passed", () => {
        const msg = "new message";
        const wrapper = shallowMount(HelloWorld, {
            propsData: {msg},
        });
        expect(wrapper.text()).toMatch(msg);
    });
})