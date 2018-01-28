//@flow
import MetaComponent from './MetaComponent'

type ChangeableState = {value: string | boolean | Array<string>}
type ChangeableProps = {onChange?: (string | boolean | Array<string>) => void}

export default class<Props, State> extends MetaComponent<Props & ChangeableProps, State & ChangeableState>{

	componentWillUpdate(nextProps: ChangeableProps , nextState: ChangeableState): void{
		this.state.value !== nextState.value && nextProps.onChange && nextProps.onChange(nextState.value)
	}
}