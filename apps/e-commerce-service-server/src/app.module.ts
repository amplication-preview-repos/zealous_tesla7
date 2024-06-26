import { Module } from "@nestjs/common";
import { UserProfileModule } from "./userProfile/userProfile.module";
import { UserRoleModule } from "./userRole/userRole.module";
import { UserModule } from "./user/user.module";
import { CategoryModule } from "./category/category.module";
import { ProductModule } from "./product/product.module";
import { SearchModule } from "./search/search.module";
import { FilterModule } from "./filter/filter.module";
import { RecommendationModule } from "./recommendation/recommendation.module";
import { CartModule } from "./cart/cart.module";
import { WishlistModule } from "./wishlist/wishlist.module";
import { OrderModule } from "./order/order.module";
import { OrderStatusModule } from "./orderStatus/orderStatus.module";
import { RefundModule } from "./refund/refund.module";
import { PaymentModule } from "./payment/payment.module";
import { DeliveryModule } from "./delivery/delivery.module";
import { ShippingModule } from "./shipping/shipping.module";
import { HelpDeskModule } from "./helpDesk/helpDesk.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { FaqModule } from "./faq/faq.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    UserProfileModule,
    UserRoleModule,
    UserModule,
    CategoryModule,
    ProductModule,
    SearchModule,
    FilterModule,
    RecommendationModule,
    CartModule,
    WishlistModule,
    OrderModule,
    OrderStatusModule,
    RefundModule,
    PaymentModule,
    DeliveryModule,
    ShippingModule,
    HelpDeskModule,
    FeedbackModule,
    FaqModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
