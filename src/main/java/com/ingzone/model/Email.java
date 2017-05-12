package com.ingzone.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

/**
 * Created by gzq on 17-5-12.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Email {

    private String toEmail;

    private String subject;

    private String content;

}
