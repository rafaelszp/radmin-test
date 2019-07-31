import Reactotron from 'reactotron-react-js'
import {reactotronRedux} from "reactotron-redux";

let ReactotronConfig = undefined;

if (process.env.NODE_ENV === 'development') {

    ReactotronConfig = {
        initiate: () => {
            Reactotron.configure()
                .use(reactotronRedux())
                .connect();
        },
        createEnhancer: () => Reactotron.createEnhancer()
    };
    // Reactotron.onCustomCommand({
    //     command: 'setDados',
    //     handler: () => {
    //         localStorage.setItem('@mensagens-inspecao/hash', "/&dados=ewogICJpZCI6IDMsCiAgInRpcG8iOiAiU0MiLAogICJjb2RpZ28iOiAiMTcwMTUzIiwKICAiZmlsaWFsIjogIjAyR08wMDAyIiwKICAiY29udGV1ZG8iOiAiRXN0YW1vcyBlbnZpYW5kbyBlc3RlIHJlY2FkbyBwYXJhIHRlc3RlIGRlIG5vdm8iLAogICJyZW1ldGVudGUiOiB7CiAgICAiaWQiOiAxLAogICAgImdlcmVuY2lhIjogIkRJUkVUT1JJQSIsCiAgICAibm9tZSI6ICJQQVVMTyBWQVJHQVMiLAogICAgInRpcG8iOiAiRCIsCiAgICAiZW1haWwiOiAicGF1bG92YXJnYXNAc2lzdGVtYWZpZWcub3JnLmJyIiwKICAgICJlbnZpYXIiOiBudWxsLAogICAgImlkUGVzc29hcyI6IDg3CiAgfSwKICAiZGVzdGluYXRhcmlvcyI6IFsKICAgIHsKICAgICAgImlkIjogOSwKICAgICAgImdlcmVuY2lhIjogIkNPQUQiLAogICAgICAibm9tZSI6ICJBTE1JUiBZQU1BTVVSQSBCTEVTSU8iLAogICAgICAidGlwbyI6ICJHIiwKICAgICAgImVtYWlsIjogImFsbWlyYmxlc2lvQHNpc3RlbWFmaWVnLm9yZy5iciIsCiAgICAgICJlbnZpYXIiOiBudWxsLAogICAgICAiaWRQZXNzb2FzIjogNzM3OAogICAgfSwKICAgIHsKICAgICAgImlkIjogMTQsCiAgICAgICJnZXJlbmNpYSI6ICJHRVRJTiIsCiAgICAgICJub21lIjogIk1BUkNPUyBQQVVMTyBGUkFHQSIsCiAgICAgICJ0aXBvIjogIkciLAogICAgICAiZW1haWwiOiAibWFyY29zQHNpc3RlbWFmaWVnLm9yZy5iciIsCiAgICAgICJlbnZpYXIiOiBudWxsLAogICAgICAiaWRQZXNzb2FzIjogMjIxCiAgICB9CiAgXSwKICAiZGF0YUhvcmFFbnZpbyI6ICIyMDE3LTA0LTA1VDE2OjM1OjUxLjgxIiwKICAibGlkYSI6IGZhbHNlLAogICJjb2RpZ29NYXBhIjogbnVsbAp9")
    //         window.location.reload()
    //     },
    //     title: "Set Dados",
    //     description: "Simular dados de mensagem"
    // });
    // Reactotron.onCustomCommand({
    //     command: 'invalidarDados',
    //     handler: () => {
    //         localStorage.removeItem('@mensagens-inspecao/hash');
    //         window.location.reload()
    //     },
    //     title: "Invalidar Dados",
    //     description: "Invalidar mensagem"
    // });
}
export default ReactotronConfig;
