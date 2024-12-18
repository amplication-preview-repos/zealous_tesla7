/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CartCreateNestedManyWithoutUsersInput } from "./CartCreateNestedManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { FeedbackCreateNestedManyWithoutUsersInput } from "./FeedbackCreateNestedManyWithoutUsersInput";
import { HelpDeskCreateNestedManyWithoutUsersInput } from "./HelpDeskCreateNestedManyWithoutUsersInput";
import { LoyaltyProgramCreateNestedManyWithoutUsersInput } from "./LoyaltyProgramCreateNestedManyWithoutUsersInput";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { RecommendationCreateNestedManyWithoutUsersInput } from "./RecommendationCreateNestedManyWithoutUsersInput";
import { EnumUserRole } from "./EnumUserRole";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { UserProfileCreateNestedManyWithoutUsersInput } from "./UserProfileCreateNestedManyWithoutUsersInput";
import { WishlistCreateNestedManyWithoutUsersInput } from "./WishlistCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => CartCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CartCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CartCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  carts?: CartCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => FeedbackCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FeedbackCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FeedbackCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  feedbacks?: FeedbackCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => HelpDeskCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => HelpDeskCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => HelpDeskCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  helpDesks?: HelpDeskCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => LoyaltyProgramCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => LoyaltyProgramCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => LoyaltyProgramCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  loyaltyPrograms?: LoyaltyProgramCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => RecommendationCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => RecommendationCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => RecommendationCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  recommendations?: RecommendationCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    enum: EnumUserRole,
  })
  @IsEnum(EnumUserRole)
  @IsOptional()
  @Field(() => EnumUserRole, {
    nullable: true,
  })
  role?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: () => UserProfileCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserProfileCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserProfileCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  userProfiles?: UserProfileCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => WishlistCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => WishlistCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => WishlistCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  wishlists?: WishlistCreateNestedManyWithoutUsersInput;
}

export { UserCreateInput as UserCreateInput };
