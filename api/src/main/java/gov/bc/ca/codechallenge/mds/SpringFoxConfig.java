package gov.bc.ca.codechallenge.mds;

import static springfox.documentation.schema.AlternateTypeRules.newRule;

import java.lang.reflect.WildcardType;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.context.request.async.DeferredResult;

import com.fasterxml.classmate.TypeResolver;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.Tag;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SpringFoxConfig {                                    
	@Bean
	public Docket usersApi() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("gov.bc.ca.codechallenge.mds.controller")) 
				.paths(PathSelectors.any())
				.build()
				.apiInfo(apiInfo())
				.pathMapping("/")
				.directModelSubstitute(LocalDate.class, String.class)
				.genericModelSubstitutes(ResponseEntity.class)
				.alternateTypeRules(
			            newRule(typeResolver.resolve(DeferredResult.class,
			                typeResolver.resolve(ResponseEntity.class, WildcardType.class)),
			                typeResolver.resolve(WildcardType.class)))
				.useDefaultResponseMessages(false)
				.tags(new Tag("comments", "All apis relating to review comments"));
	}
	
	@Autowired
	private TypeResolver typeResolver;
	
	ApiInfo apiInfo() {
        return new ApiInfoBuilder()
            .title("MDS Service")
            .description("Mines Digital Services.")
            .license("Apache 2.0")
            .licenseUrl("http://www.apache.org/licenses/LICENSE-2.0.html")
            .termsOfServiceUrl("")
            .version("1.0.0")
            .contact(new Contact("", "", "info@gov.bc.com"))
            .build();
    }
	
}