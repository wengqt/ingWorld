package com.ingzone.model.vo;

import com.ingzone.model.dto.Datum;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

/**
 * Created by omsfuk on 17-5-11.
 */

@Data
@AllArgsConstructor
public class DatumVO {

    private Integer total;

    private List<Datum> data;
}
