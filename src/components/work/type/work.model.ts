/* eslint-disable max-classes-per-file */

import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Presentation {
  @Field({ nullable: false })
  title: string;

  @Field({ nullable: false })
  url: string;
}

@ObjectType()
export class BlogPost {
  @Field({ nullable: false })
  title: string;

  @Field({ nullable: false })
  url: string;
}

@ObjectType()
export class Stack {
  @Field({ nullable: true })
  icon: string;

  @Field({ nullable: false })
  name: string;
}

@ObjectType()
export class Meta {
  @Field({ nullable: true })
  website: string;

  @Field(() => [String], { nullable: false })
  platform: Array<string>;

  @Field(() => [Stack], { nullable: false })
  stack: Array<Stack>;

  @Field(() => BlogPost, { nullable: true })
  blogPost: BlogPost;

  @Field(() => Presentation, { nullable: true })
  presentation: Presentation;

  @Field({ nullable: true })
  source: string;
}

@ObjectType()
export class WorkPage {
  @Field({ nullable: false })
  title: string;

  @Field({ nullable: false })
  detail: string;

  @Field(() => Meta, { nullable: false })
  meta: Meta;

  @Field(() => [String], { nullable: true })
  images: Array<string>;
}

@ObjectType()
export class Work {
  @Field({ nullable: false })
  title: string;

  @Field({ nullable: false })
  id: string;

  @Field({ nullable: false })
  imageUrl: string;

  @Field({ nullable: false })
  date: string;

  @Field({ nullable: false })
  description: string;

  @Field(() => WorkPage, { nullable: false })
  workPage: WorkPage;
}

/* eslint-enable max-classes-per-file */
