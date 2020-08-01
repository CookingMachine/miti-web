import { AppThunkAction } from "store/types/common";
import { TaskEnum, run } from "./tasks-logic";

export const dbActions = {
    // TODO Come up with signature
    submitEntity: (): AppThunkAction => async (dispatch, getState) => {
        await run(TaskEnum.submitEntity, null, dispatch, getState, async () => {
            return true;
        });
    },
}