import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vuex from "vuex";

const store = new Vuex.Store({
    state: {
        tareas: ["salir a caminar"]
        
    }
})

const localVue = createLocalVue()
localVue.use(Vuex);

describe("HelloWorld.vue", () => {
    it("should renders props.msg when passed", () => {
        const wrapper = shallowMount(ListaTareas, {
            localVue,
            store,
        });
        expect(wrapper.text()).toMatch("salir a caminar")
    });
})