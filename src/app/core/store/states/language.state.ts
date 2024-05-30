import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { LangActions } from "../actions/lang.action";

export interface LangStateModel{
    lang: 'en' | 'vi';
}

@State<LangStateModel>({
    name: 'language',
    defaults: {
        lang: 'en',
    }
})

@Injectable()
export class LangState {
    @Action(LangActions.SwitchLanguage)
        switchLanguage(ctx: StateContext<LangStateModel>, action: LangActions.SwitchLanguage){
            ctx.setState({lang: action.payload})
        }
}
