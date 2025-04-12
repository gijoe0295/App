import React, {useRef} from 'react';
import type {ReactionListRef} from '@pages/home/ReportScreenContext';
import {ReactionListContext} from '@pages/home/ReportScreenContext';
import PopoverReactionList from './ReactionList/PopoverReactionList';

function ReportActionListWrapper({children}: {children: React.ReactNode}) {
    const reactionListRef = useRef<ReactionListRef>(null);
    return (
        <ReactionListContext.Provider value={reactionListRef}>
            {children}
            <PopoverReactionList ref={reactionListRef} />
        </ReactionListContext.Provider>
    );
}

export default ReportActionListWrapper;
