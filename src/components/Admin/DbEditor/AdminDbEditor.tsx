import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import CategoryForm from "./CategoryForm";
import { ApplicationState, BoundActions } from "store/types/common";
import { dbActions } from "store/logic/db-logic";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

interface OwnProps {

}

interface StateProps {

}

type DispatchProps = BoundActions<typeof dbActions>

type Props = OwnProps & StateProps & DispatchProps;

enum DbEntity {
    Category = 1,
    Recipe = 2,
}

const entityNames: Record<DbEntity, string> = {
    [DbEntity.Category]: 'Category',
    [DbEntity.Recipe]: 'Recipe',
}

const AdminDbEditor = ({submitEntity}: Props) => {

    const [selectedEntity, setSelectedEntity] = useState<DbEntity>(DbEntity.Category);

    const EntityEditor = ({entity}: {entity: DbEntity}) => (
        <ListGroupItem active={selectedEntity === entity} onClick={() => setSelectedEntity(entity)}>
            {entityNames[entity]}
        </ListGroupItem>
    );

    return (
        <div className='db-editor'>
            <ListGroup>
                <EntityEditor entity={DbEntity.Category}/>
                <EntityEditor entity={DbEntity.Recipe}/>
            </ListGroup>
            {selectedEntity === DbEntity.Category && <CategoryForm/>}
        </div>
    )
}

const mapStateToProps = (state: ApplicationState, props: OwnProps): StateProps => ({
})

const mapDispatchToProps = (dispatch: Dispatch, props: OwnProps): DispatchProps => ({
    ...bindActionCreators(dbActions, dispatch)
})

export default connect<StateProps, DispatchProps, OwnProps, ApplicationState>(mapStateToProps, mapDispatchToProps)(AdminDbEditor);