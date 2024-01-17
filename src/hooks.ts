import { RootState , AppDispatch} from './redux/index';
import { Dispatch, AnyAction } from 'redux';
import { useSelector, useDispatch, TypedUseSelectorHook} from "react-redux";

export const useAppDispatch = () => useDispatch<Dispatch<AnyAction>>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;