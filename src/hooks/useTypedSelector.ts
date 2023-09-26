import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux';

export const usedTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
