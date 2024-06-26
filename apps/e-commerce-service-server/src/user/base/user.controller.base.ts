/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserService } from "../user.service";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { CartFindManyArgs } from "../../cart/base/CartFindManyArgs";
import { Cart } from "../../cart/base/Cart";
import { CartWhereUniqueInput } from "../../cart/base/CartWhereUniqueInput";
import { RecommendationFindManyArgs } from "../../recommendation/base/RecommendationFindManyArgs";
import { Recommendation } from "../../recommendation/base/Recommendation";
import { RecommendationWhereUniqueInput } from "../../recommendation/base/RecommendationWhereUniqueInput";
import { UserProfileFindManyArgs } from "../../userProfile/base/UserProfileFindManyArgs";
import { UserProfile } from "../../userProfile/base/UserProfile";
import { UserProfileWhereUniqueInput } from "../../userProfile/base/UserProfileWhereUniqueInput";
import { WishlistFindManyArgs } from "../../wishlist/base/WishlistFindManyArgs";
import { Wishlist } from "../../wishlist/base/Wishlist";
import { WishlistWhereUniqueInput } from "../../wishlist/base/WishlistWhereUniqueInput";

export class UserControllerBase {
  constructor(protected readonly service: UserService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        role: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        role: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        role: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          role: true,
          roles: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          role: true,
          roles: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/carts")
  @ApiNestedQuery(CartFindManyArgs)
  async findCarts(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Cart[]> {
    const query = plainToClass(CartFindManyArgs, request.query);
    const results = await this.service.findCarts(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        totalPrice: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/carts")
  async connectCarts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CartWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      carts: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/carts")
  async updateCarts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CartWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      carts: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/carts")
  async disconnectCarts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CartWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      carts: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/recommendations")
  @ApiNestedQuery(RecommendationFindManyArgs)
  async findRecommendations(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Recommendation[]> {
    const query = plainToClass(RecommendationFindManyArgs, request.query);
    const results = await this.service.findRecommendations(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/recommendations")
  async connectRecommendations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: RecommendationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recommendations: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/recommendations")
  async updateRecommendations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: RecommendationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recommendations: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/recommendations")
  async disconnectRecommendations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: RecommendationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recommendations: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/userProfiles")
  @ApiNestedQuery(UserProfileFindManyArgs)
  async findUserProfiles(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<UserProfile[]> {
    const query = plainToClass(UserProfileFindManyArgs, request.query);
    const results = await this.service.findUserProfiles(params.id, {
      ...query,
      select: {
        address: true,
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        phoneNumber: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/userProfiles")
  async connectUserProfiles(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userProfiles: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/userProfiles")
  async updateUserProfiles(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userProfiles: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/userProfiles")
  async disconnectUserProfiles(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userProfiles: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/wishlists")
  @ApiNestedQuery(WishlistFindManyArgs)
  async findWishlists(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Wishlist[]> {
    const query = plainToClass(WishlistFindManyArgs, request.query);
    const results = await this.service.findWishlists(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/wishlists")
  async connectWishlists(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: WishlistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wishlists: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wishlists")
  async updateWishlists(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: WishlistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wishlists: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wishlists")
  async disconnectWishlists(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: WishlistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wishlists: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
