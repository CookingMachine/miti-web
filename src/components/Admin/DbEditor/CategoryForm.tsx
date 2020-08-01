import React, { useState } from "react";
import { FormGroup, Label, Input, Form, Button } from "reactstrap";

interface Props {

}

const CategoryForm = ({}: Props) => {

    const [categoryId, setCategoryId] = useState<string>('');
    const [categoryName, setCategoryName] = useState<string>('');

    return (<>
        <Form>
            <FormGroup>
                <Label for='categoryId'>Category id</Label>
                <Input id='categoryId' value={categoryId} onChange={(e) => setCategoryId(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label for='categoryName'>Category name</Label>
                <Input id='categoryName' value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Button type='button'>Submit</Button>
            </FormGroup>
        </Form>
    </>)
}

export default CategoryForm;