"use client";
import React, { ForwardedRef, PropsWithChildren, forwardRef } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Space } from "antd";
import { IngredientField } from "./RecipeForm";

interface IngredientFieldsProps {
  changeIngredient: (index: number, name?: string, amount?: number) => void;
  deleteIngredient: (index: number) => void;
}

const IngredientFields: React.FC<IngredientFieldsProps> = ({
  changeIngredient,
  deleteIngredient,
}) => {
  return (
    <div className="mt-2">
      <h2 className="mb-2">Ingredients: </h2>
      <Form.List name="names">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => {
              return (
                <Form.Item required={false} key={field.key}>
                  <Space.Compact className="mr-2 w-11/12">
                    <Input
                      placeholder="Bahan"
                      className="w-full"
                      onChange={(e) => changeIngredient(index, e.target.value)}
                    />
                    <InputNumber
                      onChange={(value) =>
                        changeIngredient(index, undefined, Number(value))
                      }
                      placeholder="Jumlah"
                      className="w-6/12"
                      suffix="gr"
                      formatter={(value) =>
                        `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }
                    />
                  </Space.Compact>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => {
                        remove(field.name);
                        deleteIngredient(index);
                      }}
                    />
                  ) : null}
                </Form.Item>
              );
            })}
            <Form.Item>
              <Button
                type="primary"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Input.TextArea placeholder="Ketikkan deskripsi disini" />
      </Form.Item>
    </div>
  );
};

export default IngredientFields;
