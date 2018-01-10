//@flow
import MetaComponent from './MetaComponent'

// eslint-disable-next-line
export default class<Themable, T> extends MetaComponent<any, any>{

    componentWillUpdate(nextProps: Object , nextState: Object){
        this.state.value !== nextState.value && nextProps.onChange && nextProps.onChange(nextState.value)
    }
}